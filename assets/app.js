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

$('.message-provider').click(function (event) {
    let dataProviderId = event.target.getAttribute('data-provider-id');
    let dataProviderType = event.target.getAttribute('data-provider-type');
    let url = '';
    if (dataProviderType === 'dialog') {
        url = '/dialog/messages?other-user-id=' + dataProviderId;
    } else if (dataProviderType === 'channel') {
        url = '/channels/' + dataProviderId + '/branches';
    } else if (dataProviderType === 'branch') {
        url = '/branches/' + dataProviderId + '/messages';
    }
    $('.main__header__name').text(event.target.innerText.split('\n')[0]);
    $.get(
        '/dialog/messages/?other-user-id=' + dataProviderId,
        function (data, status) {
            let $messages = $('.main__list');
            $messages.empty();
            $messages.append(data);
            let messages = $messages[0];
            messages.scrollTop = messages.scrollHeight;
        }
    );
}).children().click(function(e) {
    return false;
});
