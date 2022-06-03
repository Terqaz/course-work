<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;

class RegistrationFormType extends AbstractType
{
    const INPUT_CORRECT_VALUE = 'Введите корректное значение';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lastName', TextType::class, [
                'label' => 'Фамилия',
                'required' => true,
                'empty_data' => 'Ваша фамилия...',
                'help' => 'До 40 букв',
                'constraints' => [
                    new Length(max: 40, maxMessage: self::INPUT_CORRECT_VALUE),
                    new Regex('/^[А-ЯЁ][а-яё]+(-[А-ЯЁ])?[а-яё]+$/', self::INPUT_CORRECT_VALUE)
                ],
            ])
            ->add('firstName', TextType::class, [
                'label' => 'Имя',
                'required' => true,
                'empty_data' => 'Ваша имя...',
                'help' => 'До 40 букв',
                'constraints' => [
                    new Length(max: 40, maxMessage: self::INPUT_CORRECT_VALUE),
                ],
            ])
            ->add('middleName', TextType::class, [
                'label' => 'Отчество',
                'required' => false,
                'empty_data' => 'Ваша отчество...',
                'help' => 'До 40 букв',
                'constraints' => [
                    new Length(max: 40, maxMessage: self::INPUT_CORRECT_VALUE),
                ],
            ])
            ->add('birthDate', DateType::class, [
                'label' => 'Дата рождения',
                'required' => false
            ])
            ->add('email', EmailType::class, [
                'required' => true,
                'empty_data' => 'user@example.com',
                'help' => 'До 180 символов',
            ])
            ->add('phone', TelType::class, [
                'label' => 'Номер телефона',
                'required' => false,
                'empty_data' => '+71112223344',
//                'constraints' => [
//                    new Regex('/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/')
//                ]
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'mapped' => false,
                'label' => 'Согласен с условиями пользования сервисом',
                'constraints' => [
                    new IsTrue([
                        'message' => 'Вы должны согласиться с условиями пользования',
                    ]),
                ],
            ])
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => self::INPUT_CORRECT_VALUE,
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Ващ пароль должен состоять минимум из {{ limit }} симоволов',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
