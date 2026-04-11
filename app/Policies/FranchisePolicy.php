<?php

namespace App\Policies;

use App\Models\Admin\Franchise;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class FranchisePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('franchise.view') && $user->hasRole('admin');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Franchise $franchise): bool
    {
        return $user->can('franchise.view') && $user->hasRole('admin');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('franchise.create') && $user->hasRole('admin');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Franchise $franchise): bool
    {
        return $user->can('franchise.update') && $user->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Franchise $franchise): bool
    {
       return $user->can('franchise.delete') && $user->hasRole('admin');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Franchise $franchise): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Franchise $franchise): bool
    {
        return false;
    }
}
