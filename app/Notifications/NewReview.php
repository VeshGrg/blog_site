<?php

namespace App\Notifications;

use App\Models\PostReview;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewReview extends Notification
{
    use Queueable;
    protected $review;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(PostReview $review)
    {
        $this->review = $review;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'article' => [
                'url' => route('admin.article', $this->review->article),
                'title' => $this->review->article->title,
            ],
            'message' => 'Hey, you just got new review!',
        ]);
    }

    public function broadcastType()
    {
        return 'broadcast.review';
    }

    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
