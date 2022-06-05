<?php

namespace App\Controller;

use App\Entity\Branch;
use App\Entity\User;
use App\Form\BranchType;
use App\Repository\BranchMessageRepository;
use App\Repository\BranchRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

#[IsGranted('ROLE_USER')]
#[Route('/branches')]
class BranchController extends AbstractController
{
    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    #[Route('/', name: 'app_branch_index', methods: ['GET'])]
    public function index(BranchRepository $branchRepository): Response
    {
        return $this->render('branch/index.html.twig', [
            'branches' => $branchRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_branch_new', methods: ['GET', 'POST'])]
    public function new(Request $request, BranchRepository $branchRepository): Response
    {
        $branch = new Branch();
        $form = $this->createForm(BranchType::class, $branch);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $branchRepository->add($branch, true);

            return $this->redirectToRoute('app_branch_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('branch/new.html.twig', [
            'branch' => $branch,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_branch_show', methods: ['GET'])]
    public function show(Branch $branch): Response
    {
        return $this->render('branch/show.html.twig', [
            'branch' => $branch,
        ]);
    }

    #[Route('/{id}/messages', name: 'app_branch_messages', methods: ['GET'])]
    public function getMessages(Branch $branch, BranchMessageRepository $branchMessageRepository): Response
    {
        /** @var User $user */
        $user = $this->security->getUser();

        $messages = $branchMessageRepository->getMessages($user->getId(), $branch->getId());
        $lastSeenDate = $branchMessageRepository->getBranchLastSeenDate($user->getId(), $branch->getId())[0];

        return $this->render('branch_message/index.html.twig', [
            'messages' => $messages,
            'lastSeenDate' => $lastSeenDate
        ]);
    }

    #[Route('/{id}/edit', name: 'app_branch_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Branch $branch, BranchRepository $branchRepository): Response
    {
        $form = $this->createForm(BranchType::class, $branch);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $branchRepository->add($branch, true);

            return $this->redirectToRoute('app_branch_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('branch/edit.html.twig', [
            'branch' => $branch,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_branch_delete', methods: ['POST'])]
    public function delete(Request $request, Branch $branch, BranchRepository $branchRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$branch->getId(), $request->request->get('_token'))) {
            $branchRepository->remove($branch, true);
        }

        return $this->redirectToRoute('app_branch_index', [], Response::HTTP_SEE_OTHER);
    }
}
