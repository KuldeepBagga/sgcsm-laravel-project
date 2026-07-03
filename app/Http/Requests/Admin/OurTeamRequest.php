<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class OurTeamRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->hasRole('admin') || auth()->user()->can('our_team.create') || auth()->user()->can('our_team.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'designation' => 'required',
            'status' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'image' => 'sometimes|extensions:jpeg,png,jpg|max:2048',
        ];
    }
}
