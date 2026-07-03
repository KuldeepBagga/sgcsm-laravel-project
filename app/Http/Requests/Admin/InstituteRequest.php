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
        return auth()->user()->hasRole('admin') || auth()->user()->can('institute.create') || auth()->user()->can('institute.update');
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
            'email' => [
                'required',
                'email',
                Rule::unique('institutes', 'email')->ignore($this->route('institute')),
            ],
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'pin' => 'required',
            'district' => 'required',
            'mobile' => [
                'required',
                Rule::unique('institutes', 'mobile')->ignore($this->route('institute')),
            ],
            'phone' => [
                'nullable',
                Rule::unique('institutes', 'phone')->ignore($this->route('institute')),
            ],
            'director' => 'required',
            'authorization' => 'required',
            'status' => 'required',
            'reference' => 'nullable',
            'authorized' => 'nullable',
            'image' => 'sometimes|extensions:jpeg,png,jpg',
            'user_id' => 'nullable'
        ];
    }
}
