<?php

namespace App\Policies;

use App\Models\Question;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class QuestionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('online-exam-questions.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Question $questions): bool
    {
        return $user->can('online-exam-questions.view');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('online-exam-questions.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Question $questions): bool
    {
        return $user->can('online-exam-questions.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Question $questions): bool
    {
        return $user->can('online-exam-questions.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Question $questions): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Question $questions): bool
    {
        return false;
    }
}
