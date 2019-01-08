<?php

use Illuminate\Database\Seeder;

class LandingPageContentsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('landing_page_contents')->delete();

        \DB::table('landing_page_contents')->insert(array (
            0 =>
            array (
                'id' => 1,
                'key' => 'about_1',
            'json_data' => '{"about_1":{"title":"About Eastpac","content":"Small and medium-sized enterprises (SMEs) do not have sufficient infrastructure or financial flexibility to offer supply chain management data to their customers. On the other hand, customers want more information about their orders more than ever. In the existing system, they only have access to basic shipping logs and estimations.Using blockchain and smart contracts, Eastpac Project will revolutionize supply chain management through innovative technology. Our project will provide greater transparency and reliability across the entire supply chain process to deliver trustworthy information that empowers businesses and consumers."}}',
                'created_at' => '2019-01-07 00:00:00',
                'updated_at' => '2019-01-08 04:52:10',
            ),
            1 =>
            array (
                'id' => 2,
                'key' => 'about_2',
                'json_data' => '{"about_2":{"title":"Direct-To-Consumer Decentralize Platform","content_0":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","content_1":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia","content_2":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."}}',
                'created_at' => '2019-01-08 00:00:00',
                'updated_at' => '2019-01-08 04:53:13',
            ),
            2 =>
            array (
                'id' => 3,
                'key' => 'banner_1',
                'json_data' => '{"banner_1":{"txt":"EASTPAC ICO STARTING SOON"}}',
                'created_at' => '2019-01-08 07:26:53',
                'updated_at' => '2019-01-08 07:26:53',
            ),
        ));


    }
}
