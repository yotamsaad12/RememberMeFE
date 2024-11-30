import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
})
export class UploadImagesComponent {
  uploadForm: FormGroup;
  savedImages: { file: string; description: string }[] = [];
  currentIndex: number | null = null; // Track the index of the image being edited

  constructor(private fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      file: [null, Validators.required],
      description: ['', Validators.required],
    });
  }

  // Handle file selection
  onFileSelect(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.uploadForm.get('file')?.setValue(URL.createObjectURL(file)); // Store a previewable URL
    }
  }

  // Submit form (save image and description)
  onSubmit(): void {
    if (this.uploadForm.valid) {
      const { file, description } = this.uploadForm.value;
      const image = {
        file: file, // Use the object URL to display the image
        description: description,
      };

      if (this.currentIndex !== null) {
        // If we're editing, update the existing image
        this.savedImages[this.currentIndex] = image;
        this.currentIndex = null; // Reset edit mode
      } else {
        // Add the new image to the list
        this.savedImages.push(image);
      }

      // Reset the form
      this.uploadForm.reset();
    }
  }

  // Edit an image entry
  editImage(index: number): void {
    const image = this.savedImages[index];
    this.uploadForm.setValue({
      file: image.file,
      description: image.description,
    });
    this.currentIndex = index; // Set the index to edit
  }

  // Delete an image entry
  deleteImage(index: number): void {
    this.savedImages.splice(index, 1);
  }
}
