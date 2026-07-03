<?php

namespace App\Http\Requests\Admin;

use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->hasRole('admin') || auth()->user()->can('user.create') || auth()->user()->can('user.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => ['required', 'email', Rule::unique('users')->ignore($this->route('user')),],
            'password' => $this->isMethod('post') ? 'required|confirmed' : 'nullable|confirmed',
            'role' => [
                'required',
                function ($attribute, $value, $fail) {
                    $user = $this->route('user');

                    if ($value === 'admin') {
                        $admin = User::role('admin')->first();

                        if ($admin && (!$user || $admin->id !== $user->id)) {
                            $fail('An admin user already exists.');
                        }
                    }
                },
            ],
        ];
    }
}
