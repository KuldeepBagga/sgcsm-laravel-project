<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ResultDetailsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'registration_no' => [
                'required',
                'exists:students,registration_no',
                Rule::unique('result_details', 'registration_no')->ignore($this->route('result_details'))
            ],
           // 'type' => ['required'],
            'status' => ['required'],
            'result_date' => ['required', 'date', 'before_or_equal:today'],
            'original_marksheet' => ['required'],
            'duplicate_marksheet' => ['required']
        ];
    }
}
