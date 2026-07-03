<?php

namespace App\Policies;

use App\Models\User;
use App\Models\TopInstitute;
use Illuminate\Auth\Access\Response;

class TopInstitutePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('top_institute.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, TopInstitute $topInstitute): bool
    {
        return $user->can('top_institute.view');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('top_institute.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, TopInstitute $topInstitute): bool
    {
        return $user->can('top_institute.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, TopInstitute $topInstitute): bool
    {
        return $user->can('top_institute.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, TopInstitute $topInstitute): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, TopInstitute $topInstitute): bool
    {
        return false;
    }
}
