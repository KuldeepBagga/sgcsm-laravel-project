<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
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
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'center_name' => ['required', Rule::unique('franchises', 'center_name')->ignore($this->route('franchise'))],
            'director' => 'required',
            'state' => 'required',
            'city' => 'required',
            'district' => 'required',
            'pin' => 'required',
            'email' => [
                'required',
                'email',
                Rule::unique('franchises', 'email')->ignore($this->route('franchise')),
            ],
            'phone' => 'nullable|digits_between:10,14',
            'mobile' => ['required','digits_between:10,14', Rule::unique('franchises', 'mobile')->ignore($this->route('franchise'))],
        ];
    }
}
