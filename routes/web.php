<?php

use App\Http\Controllers\Admin\AdminDashboard;
use App\Http\Controllers\Admin\CenterAffiliactionController;
use App\Http\Controllers\Admin\CertificateController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\FranchiseController;
use App\Http\Controllers\Admin\InstituteController;
use App\Http\Controllers\Admin\OurTeamController;
use App\Http\Controllers\Admin\PaymentRecordController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Franchise\FranchiseDashboard;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Student\StudentDashboard;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Frontend/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');


Route::inertia('/about', 'Frontend/About/About')->name('about-us');
Route::inertia('/mission-and-vision', 'Frontend/About/MissionVision')->name('mission-vision');
Route::inertia('/our-dream', 'Frontend/About/OurDream')->name('our-dream');
Route::inertia('/advantages', 'Frontend/About/Advantages')->name('advantages');
Route::inertia('/director-message', 'Frontend/About/DirectorMessage')->name('directors-message');
Route::inertia('/our-management-team', 'Frontend/About/OurManagementTeam')->name('our-management-team');
Route::inertia('/courses', 'Frontend/Courses')->name('courses');
Route::inertia('/downloads', 'Frontend/GetInTouch/Downloads')->name('downloads');
Route::inertia('/appreciation-letters', 'Frontend/GetInTouch/AppreciationLetters')->name('appreciation-letters');
Route::inertia('/linkage-affiliation', 'Frontend/GetInTouch/LinkageAffiliation')->name('linkage-affiliation');
Route::inertia('/how-to-get-affiliation', 'Frontend/GetInTouch/HowToGetAffiliation')->name('how-to-get-affiliation');
Route::inertia('/authorized-study-center', 'Frontend/GetInTouch/AuthorizedStudyCenter')->name('authorized-study-center');

Route::inertia('/student/login', 'Frontend/Student/Login')->name('student-login');
Route::inertia('/verify-certificate', 'Frontend/Student/VerifyCertificate')->name('verify-certificate');
Route::inertia('/online-admit-card', 'Frontend/Student/OnlineAdmitCard')->name('online-admit-card');
Route::inertia('/student-verification', 'Frontend/Student/StudentVerification')->name('student-verification');
Route::inertia('/online-result', 'Frontend/Student/OnlineResult')->name('online-result');
Route::inertia('/online-advance-result', 'Frontend/Student/OnlineAdvanceResult')->name('online-advance-result');
Route::inertia('/examination-system', 'Frontend/Student/ExaminationSystem')->name('examination-system');

Route::inertia('/asc-login', 'Frontend/CenterSection/ASCLogin')->name('asc-login');
Route::inertia('/our-account', 'Frontend/CenterSection/OurAccount')->name('our-account');
Route::inertia('/business-support', 'Frontend/CenterSection/BusinessSupport')->name('business-support');
Route::inertia('/sgcsm-rules', 'Frontend/CenterSection/SGCSMRules')->name('sgcsm-rules');

Route::inertia('/franchise/register', 'Frontend/Franchise/Register')->name('franchise-register');
Route::inertia('/franchise/public-notice', 'Frontend/Franchise/PublicNotice')->name('public-notice');

Route::inertia('/more/our-publication', 'Frontend/More/OurPublication')->name('our-publication');
Route::inertia('/more/gallary', 'Frontend/More/Gallary')->name('gallary');
Route::inertia('/more/placement-cell', 'Frontend/More/PlacementCell')->name('placement-cell');
Route::inertia('/more/news-events', 'Frontend/More/NewsEvents')->name('news-events');
Route::inertia('/more/media-coverage', 'Frontend/More/MediaCoverage')->name('media-coverage');
Route::inertia('/more/our-study-materials', 'Frontend/More/OurStudyMaterials')->name('our-study-materials');

Route::inertia('/contact', 'Frontend/Contact')->name('contact');

 Route::middleware(['auth', 'verified', 'role:admin|subadmin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('dashboard', [AdminDashboard::class, 'index'])->name('dashboard');
    Route::resource('permission', PermissionController::class);
    Route::resource('franchise', FranchiseController::class);
    Route::get('franchise/{franchise}/approve/', [FranchiseController::class, 'approve'])->name('franchise.approve');
    Route::resource('user', UserController::class);
    Route::resource('student', StudentController::class);
    Route::get('student/center/centername/{center_code}', [StudentController::class, 'get_center_name_by_center_code'])->name('admin.center_name');
    Route::resource('role', RoleController::class);
    Route::resource('institute', InstituteController::class);
    Route::resource('course', CourseController::class);
    Route::resource('franchise', FranchiseController::class);
    Route::resource('center/affiliation', CenterAffiliactionController::class)->names('center_affiliation');
    Route::resource('ourteam', OurTeamController::class);
    Route::resource('payment/record', PaymentRecordController::class)->parameters(['record' => 'payment_record'])->names('payment_record');
    Route::resource('certificate',CertificateController::class);
});

Route::middleware(['auth', 'verified', 'role:student'])->group(function () {
    Route::get('/dashboard', [StudentDashboard::class, 'index'])->name('student.dashboard');
});

Route::middleware(['auth', 'verified', 'role:franchise'])->group(function () {
    Route::get('center/dashboard', [FranchiseDashboard::class, 'index'])->name('franchise.dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
