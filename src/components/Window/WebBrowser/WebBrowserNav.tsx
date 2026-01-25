import { useState } from "react";
import WebBrowserTemplate from "./WebBrowserTemplate";

interface Props {
  initialPage?: string;
}

export default function WebBrowserWithNav({ initialPage = "cv" }: Props) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Funkcja do nawigacji - buduje historię
  const navigateToPage = (newPage: string) => {
    console.log('Navigating to:', newPage);
    setCurrentPage(newPage);
  };

  // Zawartość dla każdej strony
  const pageContent: Record<string, React.ReactNode> = {
    cv: (
      <div className="webpage">
        <h2>Curriculum Vitae</h2>
        <p>DANE CV TUTAJ<br/>DANE CV TUTAJ<br/>DANE CV TUTAJ</p>
        <button onClick={() => navigateToPage("projects")}>Go to Projects</button>
      </div>
    ),
    projects: (
      <div className="webpage">
        <h2>My Projects</h2>
        <p>PROJECTS CONTENT HERE<br/>PROJECT 1<br/>PROJECT 2</p>
        <button onClick={() => navigateToPage("portfolio")}>Go to Portfolio</button>
      </div>
    ),
    portfolio: (
      <div className="webpage">
        <h2>Portfolio</h2>
        <p>PORTFOLIO CONTENT<br/>WORK 1<br/>WORK 2</p>
        <button onClick={() => navigateToPage("cv")}>Go to CV</button>
      </div>
    ),
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <WebBrowserTemplate 
        page={currentPage} 
        onPageChange={navigateToPage}
      />
      <div style={{ flex: 1, overflow: 'auto' }}>
        {pageContent[currentPage] || <div>Page not found</div>}
      </div>
    </div>
  );
}