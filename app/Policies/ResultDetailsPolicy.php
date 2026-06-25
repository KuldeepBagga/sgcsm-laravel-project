<?php

namespace App\Policies;

use App\Models\ResultDetails;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ResultDetailsPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('result_details.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, ResultDetails $resultDetails): bool
    {
        return $user->can('result_details.view');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('result_details.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, ResultDetails $resultDetails): bool
    {
        return $user->can('result_details.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, ResultDetails $resultDetails): bool
    {
        return $user->can('result_details.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, ResultDetails $resultDetails): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, ResultDetails $resultDetails): bool
    {
        return false;
    }

    public function generate(User $user): bool
    {
       return $user->can('result.marksheet.show');
    }
}
