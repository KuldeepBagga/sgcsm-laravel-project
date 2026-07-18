<?php

namespace App\Http\Requests\Admin\Online\Assign;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class AssignExamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'exists:users,id', Rule::unique('assign_exams', 'user_id')->ignore($this->route('assign_exam'))],
            'exam_id' => ['required', 'exists:exam_courses,id'],
            'status' => ['required'],
            'exam_time' => ['required']
        ];
    }
}
