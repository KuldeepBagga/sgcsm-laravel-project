<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CertificateRequest extends FormRequest
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
            'certificate_number' => ['required', 'exists:students,certificate_no', Rule::unique('certificates')->ignore($this->certificate)],
            'registration_no' => ['required', 'exists:students,registration_no', Rule::unique('certificates')->ignore($this->certificate)],
            'conducted_by' => 'required',
            'duration' => 'required',
            'grade' => 'required',
            'issued_date' => 'required',
            'certificate_type' => 'required',
            //'course_type' => 'required',
            //'show_marksheet' => 'required',
            'typing_speed' => 'nullable',
            'shorthand_speed' => 'nullable',
            'accuracy' => 'nullable',
            'certificate_image' => 'required',
            'image' => 'nullable'
        ];
    }
}
