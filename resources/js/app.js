require('./bootstrap');

if (window.Laravel.authenticated) {

    Echo.private(`users.${window.Laravel.user_id}`)
        .notification((notification) => {
            console.log(notification);

            if(notification.type == 'broadcast.review') {
                find('#').html(`
                    ${notification.message} <br> <a href="${notification.article.url}">${notification.article.title}</a>
                `);

            }
        });
}
