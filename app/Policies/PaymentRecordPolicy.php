<?php

namespace App\Policies;

use App\Models\PaymentRecord;
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
        if (! $user->can('payment_record.update')) {
            return false;
        }

        // Admin can update all records
        if ($user->hasRole('admin')) {
            return true;
        }

        // Franchise can update only their own center's records
        return $user->institute
            && $user->institute->center_code === $paymentRecord->center_code;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, PaymentRecord $paymentRecord): bool
    {
        if (! $user->can('payment_record.delete')) {
            return false;
        }
        
        if ($user->hasRole('admin')) {
            return true;
        }

        return $user->institute && $user->institute->center_code === $paymentRecord->center_code;
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
