<?php

namespace App\Form;

use App\Entity\Channel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChannelType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Название'
            ])
            ->add('description', TextareaType::class, [
                'required' => false,
                'label' => 'Описание'
            ])
            ->add('isPrivate', CheckboxType::class, [
                'label' => 'Закрытый',
                'required' => false,
                'help' => 'Только вы сможете добавить пользователя в закрытый канал'
            ])
            ->add('isAnybodyAddBranches', CheckboxType::class, [
                'label' => 'Любой участник может создать ветку',
                'required' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Channel::class,
        ]);
    }
}
