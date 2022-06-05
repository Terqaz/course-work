<?php

namespace App\Form;

use App\Entity\DialogMessage;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;

class DialogMessageType extends AbstractType
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
            ->add('other-user-id', HiddenType::class, [
                'mapped' => false,
                'data' => $options['other-user-id']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DialogMessage::class,
            'other-user-id' => 0
        ]);

        $resolver->addAllowedTypes('other-user-id', 'int');
    }
}
