<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
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
            'name' => 'required',
            'relation' => 'required',
            'father_name' => 'required',
            'mother_name' => 'required',
            'date_joined' => 'required',
            'date_of_birth' => 'required',
            'qualification' => 'required',
            'center_code' => 'required',
            'state' => 'required',
            'district' => 'required',
            'phone' => 'required',
            'adhaar_no' => 'nullable',
            'paid' => 'nullable',
            'certificate_issued' => 'nullable',
            'course_id' => 'required',
            'scan' => 'nullable',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg|max:2048',
            'session_start' => 'nullable',
            'session_end' => 'nullable',
        ];
    }

    public function messages()
    {
        return [
            'course_id.required' => 'The course field is required.'
        ];
    }
}
