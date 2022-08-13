<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;

class ArticleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $articles = array(
            array(
                'id' => 1,
                'title' => 'Blog 1',
                'name' => 'Admin User',
                'user_id' => 1,
                'genre' => 'hiphop',
                'summary' => ' Ad alias consequatur dolore dolores enlestias nihil optio quae quidem recusandae sapiente soluta tempore, ullam. Dicta, numquam.',
                'description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dolore dolores enim esse ipsam itaque libero molestias nihil optio quae quidem recusandae sapiente soluta.',
                'is_featured' => false
            ),
         array(
             'id' => 2,
                'title' => 'Blog 2',
                'name' => 'Blogger User',
                'user_id' => 2,
                'genre' => 'sports',
                'summary' => ' Ad alias consequatur dolore dolores enlestias nihil optio quae quidem recusandae sapiente soluta tempore, ullam. Dicta, numquam.',
                'description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dolore dolores enim esse ipsam itaque libero molestias nihil optio quae quidem recusandae sapiente soluta.',
                'is_featured' => true
            ),
         array(
             'id' => 3,
                'title' => 'Thriller',
                'name' => 'Admin User',
                'user_id' => 3,
                'genre' => 'Suspense',
                'summary' => ' Ad alias consequatur dolore dolores enlestias nihil optio quae quidem recusandae sapiente soluta tempore, ullam. Dicta, numquam.',
                'description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dolore dolores enim esse ipsam itaque libero molestias nihil optio quae quidem recusandae sapiente soluta.',
                'is_featured' => false
            ),
         array(
             'id' => 4,
                'title' => 'Romantic',
                'name' => 'Blogger User',
                'user_id' => 2,
                'genre' => 'Love season',
                'summary' => ' Ad alias consequatur dolore dolores enlestias nihil optio quae quidem recusandae sapiente soluta tempore, ullam. Dicta, numquam.',
                'description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dolore dolores enim esse ipsam itaque libero molestias nihil optio quae quidem recusandae sapiente soluta.',
                'is_featured' => false
            ),
         array(
             'id' => 5,
                'title' => 'Action',
                'name' => 'Reader User',
                'user_id' => 1,
                'genre' => 'blockbuster',
                'summary' => ' Ad alias consequatur dolore dolores enlestias nihil optio quae quidem recusandae sapiente soluta tempore, ullam. Dicta, numquam.',
                'description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dolore dolores enim esse ipsam itaque libero molestias nihil optio quae quidem recusandae sapiente soluta.',
                'is_featured' => true
            ),
         array(
             'id' => 6,
                'title' => 'Blog 1',
                'name' => 'Blogger User',
                'user_id' => 1,
                'genre' => 'sgsdgvs',
                'summary' => ' Ad alias consequatur dolore dolores enlestias nihil optio quae quidem recusandae sapiente soluta tempore, ullam. Dicta, numquam.',
                'description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dolore dolores enim esse ipsam itaque libero molestias nihil optio quae quidem recusandae sapiente soluta.',
                'is_featured' => false
            ),
         array(
             'id' => 7,
                'title' => 'Countryside',
                'name' => 'Admin User',
                'user_id' => 2,
                'genre' => 'Classical',
                'summary' => ' Ad alias consequatur dolore dolores enlestias nihil optio quae quidem recusandae sapiente soluta tempore, ullam. Dicta, numquam.',
                'description' => ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dolore dolores enim esse ipsam itaque libero molestias nihil optio quae quidem recusandae sapiente soluta.',
                'is_featured' => false
            )
        );
        foreach($articles as $article_data){
            $article = new Article();
            $article->fill($article_data);
            $article->save();
        }
    }
}
