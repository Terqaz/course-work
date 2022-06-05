/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

import $ from 'jquery';

// start the Stimulus application
import './bootstrap';

const messageProviders = {DIALOG: 'dialog', BRANCH: 'branch', CHANNEL: 'channel'};

let dataProviderId;

let dataProviderType;
$('.message-provider').click(function (event) {
    dataProviderId = event.target.getAttribute('data-provider-id');
    dataProviderType = event.target.getAttribute('data-provider-type');

    let url = '';

    if (dataProviderType === messageProviders.DIALOG) {
        url = getDialogMessageUrl(dataProviderId);

    } else if (dataProviderType === messageProviders.BRANCH) {
        url = getBranchMessageUrl(dataProviderId);

    } else if (dataProviderType === messageProviders.CHANNEL) {
        url = '/channels/' + dataProviderId;
    }
    $('.main__header__name').text(event.target.innerText.split('\n')[0]);
    if (dataProviderType === messageProviders.DIALOG || dataProviderType === messageProviders.BRANCH) {
        loadMessages(url);
    } else if (dataProviderType === messageProviders.CHANNEL) {
        $.get(
            url,
            function (data, status) {
                let $mainContent = $('.main__content');
                $mainContent.empty();
                $mainContent.append(data);
            }
        )
    }

}).children().click(function(e) {
    return false;
});

$(document).on('submit', 'form[name=dialog_message], form[name=branch_message]', function (event) {
    event.preventDefault();
});

$(document).on('click', '.dialog-message-send-btn', function (event) {
    submitFormAndShowMessage(
        $('form[name=dialog_message]'),
        getDialogMessageUrl(dataProviderId)
    );
});

$(document).on('click', '.branch-message-send-btn', function (event) {
    submitFormAndShowMessage(
        $('form[name=branch_message]'),
        getBranchMessageUrl(dataProviderId)
    );
});

function getDialogMessageUrl(dataProviderId) {
    return '/dialog/messages/?other-user-id=' + dataProviderId;
}

function getBranchMessageUrl(dataProviderId) {
    return '/branches/' + dataProviderId + '/messages';
}

function submitFormAndShowMessage($form, $url) {
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: createResponseBody($form),
        complete: function (html) {
            loadMessages($url);
        }
    });
}

function createResponseBody($form) {
    let data = {};
    for (const field of $form[0].elements) {
        if (field.name) {
            data[field.name] = field.value;
        }
    }
    return data;
}

function loadMessages(url) {
    $.get(
        url,
        function (data, status) {
            let $mainContent = $('.main__content');
            $mainContent.empty();
            $mainContent.append(data);
            let messages = $mainContent[0];
            messages.scrollTop = messages.scrollHeight;

            const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
            const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

        }
    );
}

// $('.dropdown-toggle').click(function (event) {
//     let $elements = $('#' + event.target.id);
//
//     switch ($elements.css('display')) {
//         case 'none': $elements.css('display', 'block'); break;
//         case 'block': $elements.css('display', 'none'); break;
//     }
// });
