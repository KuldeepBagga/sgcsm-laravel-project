<?php

namespace App\Providers;

use App\Policies\CenterAffiliationPolicy;
use App\Policies\PermissionPolicy;
use App\Policies\ResultDetailsPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Gate::guessPolicyNamesUsing(function ($modelClass) {
        //     return 'App\\Policies\\Admin\\'.class_basename($modelClass).'Policy';
        // });
        // Gate::policy(Permission::class, PermissionPolicy::class);
        //Gate::policy(Permission::class, CenterAffiliationPolicy::class);

        //Gate::policy(Permission::class, ResultDetailsPolicy::class);
        
        Vite::prefetch(concurrency: 3);
        Inertia::share([
            'flash' => function () {
                return [
                    'success' => session('success'),
                    'error' => session('error'),
                ];
            },
        ]);
    }
}
