<?php

use Illuminate\Database\Seeder;

class Ai_Machine_LearningSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ai_machine_learning')->insert([
            [
                'name' => 'Artificial Intelligence (AI)',
                'alias' => 'ai-machine-learning',
                'description' => 'Artificial intelligence is a science like mathematics or biology. It studies ways to build intelligent programs and machines that can creatively solve problems, which has always been considered a human prerogative.',
                'image'=>'/img/aI-and-machine-learning/artificial-intelligence.jpg"',
                'summary' => 'Artificial intelligence is a science like mathematics or biology. It studies ways to build intelligent programs and machines that can creatively solve problems, which has always been considered a human prerogative.',
                'body' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ],
            [
                'name' => 'Machine Learning (ML)',
                'alias' => 'machine-learning',
                'description' => 'Machine learning is a subset of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. In ML, there are different algorithms (e.g. neural networks) that help to solve problems.',
                'image'=>'/img/aI-and-machine-learning/machine-learning.jpg',
                'summary' => 'Machine learning is a subset of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. In ML, there are different algorithms (e.g. neural networks) that help to solve problems.',
                'body' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ],
            [
                'name' => 'Deep Learning (DL)',
                'alias' => 'deep-learning',
                'description' => 'Deep learning, or deep neural learning, is a subset of machine learning, which uses the neural networks to analyze different factors with a structure that is similar to the human neural system.',
                'image'=>'/img/aI-and-machine-learning/deep-learning.jpg',
                'summary' => 'Deep learning, or deep neural learning, is a subset of machine learning, which uses the neural networks to analyze different factors with a structure that is similar to the human neural system.',
                'body' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            ],
        ]);
    }
}
