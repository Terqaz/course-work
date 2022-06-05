<?php

namespace App\Form;

use App\Entity\BranchMessage;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;

class BranchMessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('text', TextareaType::class, [
                'mapped' => false,
                'required' => true,
                'label' => false,
                'constraints' => [
                    new Length(
                        max: 4096,
                        maxMessage: 'Слишком длинное сообщение. Максимум {{ limit }} символов'
                    )
                ]
            ])
            ->add('branch-id', HiddenType::class, [
                'mapped' => false,
                'data' => $options['branch-id']
            ])
            ->add('channel-user-id', HiddenType::class, [
                'mapped' => false,
                'data' => $options['channel-user-id']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => BranchMessage::class,
            'branch-id' => 0,
            'channel-user-id' => 0,
        ]);

        $resolver->addAllowedTypes('branch-id', 'int');
        $resolver->addAllowedTypes('channel-user-id', 'int');
    }
}
