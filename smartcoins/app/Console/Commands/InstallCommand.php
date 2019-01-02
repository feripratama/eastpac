<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'eastpac:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install East PAC Boilerplate';

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
        //
        $this->info("Migrate Database ....");
        $this->call("migrate:fresh");
        $this->info("Populate Database ....");
        $this->call("db:seed");
        $this->info("Create Storage Link ....");
        $this->call("storage:link");
        $this->call("eastpac:createlink", array("pathname"=> "assets"));

    }
}
