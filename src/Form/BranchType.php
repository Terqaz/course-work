<?php

namespace App\Form;

use App\Entity\Branch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BranchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Название'
            ])
            ->add('isPrivate', CheckboxType::class, [
                'label' => 'Закрытая',
                'required' => false,
                'help' => 'Только вы сможете добавить пользователя в закрытую ветку'
            ])
            ->add('isInformational', CheckboxType::class, [
                'label' => 'Информационная',
                'required' => false,
                'help' => 'Только вы сможете писать сообщения в информационную ветку'
            ])
            ->add('channelId', HiddenType::class, [
                'mapped' => false,
                'data' => $options['channel-id']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Branch::class,
            'channel-id' => 0,
        ]);

        $resolver->setAllowedTypes('channel-id', 'int');
    }
}
