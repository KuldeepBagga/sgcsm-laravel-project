<?php

namespace App\Http\Requests\Frontend;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FranchiseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'center_name' => ['required', Rule::unique('franchises', 'center_name')],
            'director' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'district' => ['required', 'string', 'max:255'],
            'block' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'pin_code' => ['required', 'string', 'max:20'],
            'email' => ['required', 'email', Rule::unique('franchises', 'email')],
            'phone' => ['required', 'string', 'max:20', Rule::unique('franchises', 'phone')],
            'message' => ['nullable', 'string'],
        ];
    }
}
