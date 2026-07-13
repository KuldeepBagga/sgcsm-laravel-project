<?php

use App\Http\Controllers\Admin\AdminDashboard;
use App\Http\Controllers\Admin\CenterAffiliactionController;
use App\Http\Controllers\Admin\CertificateController;
use App\Http\Controllers\Admin\Content\BannerController;
use App\Http\Controllers\Admin\CourseContentController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\CourseModuleController;
use App\Http\Controllers\Admin\FranchiseController;
use App\Http\Controllers\Admin\InstituteController;
use App\Http\Controllers\Admin\OurTeamController;
use App\Http\Controllers\Admin\PaymentRecordController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\ResultController;
use App\Http\Controllers\Admin\ResultDetailsController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\StudentController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Frontend\About\OurManagementTeamController;
use App\Http\Controllers\Frontend\FranchiseController as FrontendFranchiseController;
use App\Http\Controllers\Frontend\Result\ResultController as ResultResultController;
use App\Http\Controllers\GetInTouch\AuthorizedStudyCenterController;
use App\Http\Controllers\Admin\NoticeController;
use App\Http\Controllers\Admin\TopInstituteController;
use App\Http\Controllers\Frontend\CenterVerification;
use App\Http\Controllers\Frontend\Course\CourseController as CourseCourseController;
use App\Http\Controllers\Frontend\Student\StudentVerificationController;
use App\Http\Controllers\Frontend\Student\VerifyCertificateController;
use App\Http\Controllers\Frontend\ValidityAuthorizationController;
use App\Http\Controllers\ProfileController;
use App\Models\Banner;
use App\Models\Notice;
use App\Models\Student;
use App\Models\Testimonial;
use App\Models\TopInstitute;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $banner_1 = Banner::where('type', '=', 'banner_1')->get();
    $banner_2 = Banner::where('type', '=', 'banner_2')->get();
    $linkage = Banner::where('type', '=', 'linkage')->get();
    $our_gallery = Banner::where('type', '=', 'gallery')->get();
    $testimonial = Testimonial::all();
    $notice = Notice::all();
    $latestStudents = Student::select('name', 'image')->latest()->take(20)->get();
    $excellence_center = TopInstitute::with('institute')->get();


    return Inertia::render('Frontend/Home', [
        'canLogin' => Route::has('login'),
        //'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'banner_1' => $banner_1,
        'banner_2' => $banner_2,
        'linkage' => $linkage,
        'our_gallery' => $our_gallery,
        'testimonial' => $testimonial,
        'notice' => $notice,
        'latest_student' => $latestStudents,
        'excellence_center' => $excellence_center
    ]);
})->name('home');


Route::inertia('/about', 'Frontend/About/About')->name('about-us');
Route::inertia('/mission-and-vision', 'Frontend/About/MissionVision')->name('mission-vision');
Route::inertia('/our-dream', 'Frontend/About/OurDream')->name('our-dream');
Route::inertia('/advantages', 'Frontend/About/Advantages')->name('advantages');
Route::inertia('/director-message', 'Frontend/About/DirectorMessage')->name('directors-message');
Route::get('/our-management-team', [OurManagementTeamController::class, 'our_team'])->name('our-management-team');
//Route::inertia('/courses', 'Frontend/Courses')->name('courses');
Route::get('/courses', [CourseCourseController::class, 'index'])->name('courses');
Route::get('/courses/show/{id}/{category}', [CourseCourseController::class, 'show'])->name('courses.show');
Route::get('/courses/search', [CourseCourseController::class, 'search'])->name('courses.search');

Route::inertia('/downloads', 'Frontend/GetInTouch/Downloads')->name('downloads');
Route::inertia('/appreciation-letters', 'Frontend/GetInTouch/AppreciationLetters')->name('appreciation-letters');
Route::inertia('/linkage-affiliation', 'Frontend/GetInTouch/LinkageAffiliation')->name('linkage-affiliation');
Route::inertia('/how-to-get-affiliation', 'Frontend/GetInTouch/HowToGetAffiliation')->name('how-to-get-affiliation');

Route::get('/authorized-study-center', [AuthorizedStudyCenterController::class, 'index'])->name('authorized-study-center');
Route::post('/authorized-study-center', [AuthorizedStudyCenterController::class, 'show'])->name('authorized-study-center.show');

Route::inertia('/student/login', 'Frontend/Student/Login')->name('student-login');

//Route::inertia('/verify-certificate', 'Frontend/Student/VerifyCertificate')->name('verify-certificate');
Route::get('/certificate/verify', [VerifyCertificateController::class, 'index'])->name('home.certificate.index');
Route::post('/certificate/verify', [VerifyCertificateController::class, 'verify'])->name('home.certificate.post');

Route::inertia('/online-admit-card', 'Frontend/Student/OnlineAdmitCard')->name('online-admit-card');

Route::get('/student-verification', [StudentVerificationController::class, 'index'])->name('student-verification');
Route::post('/student-verification', [StudentVerificationController::class, 'verify'])->name('student-verification.post');

Route::get('/online-result', [ResultResultController::class, 'index'])->name('online-result');
Route::post('/online-result', [ResultResultController::class, 'show'])->name('online-result.post');
Route::get('/online-result/show/result/{result_id}', [ResultResultController::class, 'display_online_result'])->name('display-online-result.get');

Route::inertia('/online-advance-result', 'Frontend/Student/OnlineAdvanceResult')->name('online-advance-result');
Route::inertia('/examination-system', 'Frontend/Student/ExaminationSystem')->name('examination-system');

Route::inertia('/asc-login', 'Frontend/CenterSection/ASCLogin')->name('asc-login');
Route::inertia('/our-account', 'Frontend/CenterSection/OurAccount')->name('our-account');
Route::inertia('/business-support', 'Frontend/CenterSection/BusinessSupport')->name('business-support');
Route::inertia('/sgcsm-rules', 'Frontend/CenterSection/SGCSMRules')->name('sgcsm-rules');

Route::resource('/franchise/register', FrontendFranchiseController::class)->only(['index', 'store'])->names(['index' => 'franchise-register', 'store' => 'franchise-store',]);

Route::inertia('/franchise/public-notice', 'Frontend/Franchise/PublicNotice')->name('public-notice');

Route::get('validity-and-authorization',[ValidityAuthorizationController::class,'index'])->name('validity-authorization.index');
Route::post('validity-and-authorization',[ValidityAuthorizationController::class,'verify'])->name('validity-authorization.post');

Route::get('center-verification',[CenterVerification::class,'index'])->name('center-verification.index');
Route::post('center-verification',[CenterVerification::class,'verify'])->name('center-verification.post');

Route::get(
    '/more/our-publication',
    function () {
        $our_publication = Banner::where('type', '=', 'publication')->get();
        return Inertia::render('Frontend/More/OurPublication', compact('our_publication'));
    }
)->name('our-publication');

Route::get('/more/gallary', function () {
    $gallery = Banner::where('type', '=', 'gallery')->get();
    return Inertia::render('Frontend/More/Gallary', compact('gallery'));
})->name('gallary');
Route::inertia('/more/placement-cell', 'Frontend/More/PlacementCell')->name('placement-cell');
Route::inertia('/more/news-events', 'Frontend/More/NewsEvents')->name('news-events');
Route::inertia('/more/media-coverage', 'Frontend/More/MediaCoverage')->name('media-coverage');
Route::inertia('/more/our-study-materials', 'Frontend/More/OurStudyMaterials')->name('our-study-materials');

Route::inertia('/contact', 'Frontend/Contact')->name('contact');
Route::inertia('/fake-sgcsm', 'Frontend/Fake/Fake')->name('fake-sgcsm');

Route::middleware(['auth', 'verified', 'role:admin|subadmin|franchise|student'])->prefix('panel')->name('admin.')->group(function () {
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

    Route::resource('certificate', CertificateController::class);
    Route::get('certificate/show/certificate/{id}', [CertificateController::class, 'generate_certificate'])->name('certificate.generate');

    Route::resource('testimonial', TestimonialController::class);
    Route::resource('result/details', ResultDetailsController::class)->parameters(['details' => 'result_details'])->names('result_details');
    Route::resource('result', ResultController::class);
    Route::get('result/show/{result_details}', [ResultDetailsController::class, 'display_result'])->name('duplicate_online_result.show');
    Route::get('result/marksheet/display/{result_details}', [ResultDetailsController::class, 'genereate_marksheet'])->name('marksheet.generate');
    Route::get('student/generate/qr/{student}', [StudentController::class, 'generate_qr_code'])->name('genereate.qr_code');
    Route::get('student/genereate/icard/{registration_no}',[StudentController::class,'icard'])->where('registration_no', '.*')->name('print.icard');
    Route::resource('banner', BannerController::class);
    Route::resource('notice', NoticeController::class);
    Route::resource('top/institute', TopInstituteController::class)->parameter('institute', 'topInstitute')->names('top_institute');
    Route::resource('course-module', CourseModuleController::class);
    Route::resource('course-content', CourseContentController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
