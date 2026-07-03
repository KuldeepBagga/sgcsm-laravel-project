<?php

namespace App\Policies;

use App\Models\CourseModule;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CourseModulePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('course_module.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, CourseModule $courseModule): bool
    {
        return $user->can('course_module.view');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('course_module.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, CourseModule $courseModule): bool
    {
        return $user->can('course_module.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, CourseModule $courseModule): bool
    {
        return $user->can('course_module.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, CourseModule $courseModule): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, CourseModule $courseModule): bool
    {
        return false;
    }
}
