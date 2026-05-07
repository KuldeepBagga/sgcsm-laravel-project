<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PaymentRecordRequest extends FormRequest
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
            'transaction_no' => ['required', Rule::unique('payment_records','transaction_no')->ignore($this->route('payment_record'))],
            'transaction_date' => ['required'],
            'amount' => ['required'],
            'status' => ['required'],
            'center_code' => ['required'],
            //'center_name' => ['required'],
            'message' => ['nullable']
        ];
    }
}
