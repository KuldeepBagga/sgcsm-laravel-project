<?php

namespace App\Http\Requests\Admin\Online\Question;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Validator;

class QuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('admin') || Auth::user()->can('online-exam-question.create') || Auth::user()->can('online-exam-questions.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'question' => ['required', 'string', 'max:1000'],
            'exam_id' => ['required'],
            'modules' => ['required', 'array', 'min:2'],
            'modules.*.answer' => ['required', 'string', 'max:255'],
            'modules.*.correct_answer' => ['required', 'boolean'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function ($validator) {
            $correctCount = collect($this->modules)
                ->where('correct_answer', true)
                ->count();

            if ($correctCount !== 1) {
                $validator->errors()->add(
                    'modules',
                    'One correct answer must be selected.'
                );
            }
        });
    }

    public function messages(): array
    {
        return [
            'question.required' => 'The question field is required.',
            'modules.required' => 'Please add answer options.',
            'modules.min' => 'At least two answer options are required.',
            'modules.*.answer.required' => 'Answer is required.',
            'modules.*.correct_answer.boolean' => 'Invalid correct answer value.',
        ];
    }
}
