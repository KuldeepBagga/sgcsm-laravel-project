<?php

namespace App\Http\Requests\Admin\Online\Bulk;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class BulkUploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin') || Auth::user()->can('exam-online-bulk-upload.create') || Auth::user()->can('exam-online-bulk-upload.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'exam_id' => ['required', 'integer'],
            'file' => ['required', 'file', 'mimes:xls,xlsx,csv'],
        ];
    }
}
