<?php

namespace App\Policies;

use App\Models\OurTeam;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class OurTeamPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('ourteam.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, OurTeam $ourTeam): bool
    {
        return $user->can('ourteam.view');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('ourteam.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, OurTeam $ourTeam): bool
    {
        return $user->can('ourteam.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, OurTeam $ourTeam): bool
    {
        return $user->can('ourteam.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, OurTeam $ourTeam): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, OurTeam $ourTeam): bool
    {
        return false;
    }
}
