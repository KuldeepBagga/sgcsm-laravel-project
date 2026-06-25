<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PaymentRecordRequest;
use App\Models\PaymentRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class PaymentRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny', PaymentRecord::class);

        $query = PaymentRecord::query();

        if (auth()->user()->hasRole('franchise')) {
            $centerCode = auth()->user()->institute?->center_code;
            $query->where('center_code', $centerCode);
        }

        if ($request->filled('transaction_no')) {
            $query->where('transaction_no', 'like', '%' . $request->transaction_no . '%');
        }

        if ($request->filled('center_code')) {
            $query->where('center_code', 'like', '%' . $request->center_code . '%');
        }

        if ($request->filled('status')) {
            $query->where('status', 'like', '%' . $request->status . '%');
        }

        $payment_record = $query->latest()->paginate(50)->withQueryString();

        return Inertia::render('Admin/Payment/Record/List', compact('payment_record'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('create', PaymentRecord::class);

        $centerCode = null;

        if (auth()->user()->hasRole('franchise')) {
            $centerCode = auth()->user()->institute?->center_code;
        }

        return Inertia::render('Admin/Payment/Record/Form', compact('centerCode'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PaymentRecordRequest $request)
    {
        Gate::authorize('create', PaymentRecord::class);
        $validated = $request->validated();
        PaymentRecord::create($validated);
        return redirect()->route('admin.payment_record.index')->with('success', 'Payment record successfully created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PaymentRecord $payment_record)
    {
        Gate::authorize('update', $payment_record);
        return inertia('Admin/Payment/Record/Form', compact('payment_record'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PaymentRecordRequest $request, PaymentRecord $payment_record)
    {
        Gate::authorize('update', $payment_record);
        $validated = $request->validated();
        $payment_record->update($validated);
        return redirect()->route('admin.payment_record.index')->with('success', 'Payment record successfully updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PaymentRecord $payment_record)
    {
        Gate::authorize('delete', $payment_record);
        $payment_record->delete();
        return redirect()->route('admin.payment_record.index')->with('success', 'Payment record successfully deleted!');
    }
}
