<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Permission\Models\Permission;

class GeneratePermissionsFromRoutes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permission:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate permissions from routes';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $modules = [
            'permission',
            'user',
            'role',
            'course',
            'institute',
            'student',
            'franchise'
        ];

        $defaultActions = ['create', 'view', 'delete', 'update'];

        $extraActions = [
            'franchise' => ['approve'],
        ];

        foreach ($modules as $module) {

            $actions = array_merge(
                $defaultActions,
                $extraActions[$module] ?? []
            );

            foreach ($actions as $action) {
                $name = $module . '.' . $action;

                Permission::firstOrCreate([
                    'name' => $name,
                    'guard_name' => 'web',
                ]);
            }
        }
    }
}
