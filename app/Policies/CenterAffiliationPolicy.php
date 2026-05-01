<?php

namespace App\Policies;

use App\Models\Admin\CenterAffiliation;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CenterAffiliationPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('center_affiliation.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, CenterAffiliation $centerAffiliations): bool
    {
        return $user->can('center_affiliation.view');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('center_affiliation.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, CenterAffiliation $centerAffiliations): bool
    {
        return $user->can('center_affiliation.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, CenterAffiliation $centerAffiliations): bool
    {
        return $user->can('center_affiliation.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, CenterAffiliation $centerAffiliations): bool
    {
       return $user->can('center_affiliation.restore');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, CenterAffiliation $centerAffiliations): bool
    {
       return $user->can('center_affiliation.forceDelete');
    }
}
