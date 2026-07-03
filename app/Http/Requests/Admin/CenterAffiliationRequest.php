<?php

namespace App\Http\Requests\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CenterAffiliationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->hasRole('admin') || auth()->user()->can('center_affiliation.create') || auth()->user()->can('center_affiliation.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'certificate_number' => ['required', Rule::unique('center_affiliations', 'certificate_number')->ignore($this->route('affiliation'))],
            'director' => 'required',
            'center_name' => 'required',
            'district' => 'required',
            'issue_date' => 'required',
            'expire_date' => 'required',
            'status' => 'required',
            'center_code' => ['required', Rule::unique('center_affiliations', 'center_code')->ignore($this->route('affiliation'))],
        ];
    }
}
