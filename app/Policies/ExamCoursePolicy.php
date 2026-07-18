<?php

namespace App\Policies;

use App\Models\ExamCourse;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ExamCoursePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('online.exam.course.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, ExamCourse $examCourse): bool
    {
        return $user->can('online.exam.course.view');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('online.exam.course.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, ExamCourse $examCourse): bool
    {
        return $user->can('online.exam.course.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, ExamCourse $examCourse): bool
    {
        return $user->can('online.exam.course.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, ExamCourse $examCourse): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, ExamCourse $examCourse): bool
    {
        return false;
    }
}
