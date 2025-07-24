import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontpage.html',
  styleUrls: ['./frontpage.css']
})
export class Frontpage implements OnInit {
  ribbons: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getFrontPageRibbons().subscribe({
      next: (data) => {
        this.ribbons = data || [];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading ribbons:', error);
        this.error = 'Failed to load content';
        this.loading = false;
      }
    });
  }

  onImageError(event: any): void {
    console.error('Image failed to load:', event.target.src);
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
  }
}