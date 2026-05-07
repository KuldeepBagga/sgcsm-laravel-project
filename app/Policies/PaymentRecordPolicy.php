<?php

namespace App\Policies;

use App\Models\Admin\PaymentRecord;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PaymentRecordPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('payment_record.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, PaymentRecord $paymentRecord): bool
    {
        return $user->can('payment_record.view');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('payment_record.create');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, PaymentRecord $paymentRecord): bool
    {
        return $user->can('payment_record.update');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, PaymentRecord $paymentRecord): bool
    {
        return $user->can('payment_record.delete');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, PaymentRecord $paymentRecord): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, PaymentRecord $paymentRecord): bool
    {
        return false;
    }
}
