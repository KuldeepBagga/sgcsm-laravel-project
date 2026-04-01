<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class InstituteRequest extends FormRequest
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
            'center_code' => [
                'required',
                Rule::unique('institutes', 'center_code')->ignore($this->route('institute')),
            ],
            'center_name' => 'required',
            'email' => 'required|email',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'pin' => 'required',
            'district' => 'required',
            'mobile' => 'required',
            'phone' => 'nullable',
            'director' => 'required',
            'authorization' => 'required',
            'status' => 'required',
            'reference' => 'nullable',
            'authorized' => 'nullable',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }
}
