<?php

namespace App\Services;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Format;

class ImageService
{
    protected ImageManager $manager;

    public function __construct()
    {
        $this->manager = ImageManager::usingDriver(Driver::class);
    }

    public function uploadAndResize($file, $path = 'uploads', $width = 300, $height = 300): string
    {
        $image = $this->manager
            ->decode($file)
            ->resize($width, $height);

        $filename = time() . '_' . uniqid() . '.jpg';

        Storage::disk('public')->put(
            $path . '/' . $filename,
            $image->encodeUsingFormat(Format::PNG)
        );

        return $path . '/' . $filename;
    }

    public function delete(?string $path): void
    {
        if ($path && Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }
}