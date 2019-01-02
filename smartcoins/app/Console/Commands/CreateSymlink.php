<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateSymlink extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'eastpac:createlink {pathname}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Folder Which Are Exist in storage app folder as symlink';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $path = $this->argument('pathname');
        $this->laravel->make('files')->link(
            storage_path('app/'. $path), public_path($path)

        );
        $this->info('The [public/'.$path.'] directory has been linked.');


    }
}
