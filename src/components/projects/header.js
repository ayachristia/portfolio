export default function projectsHeader() {
    //projects header
    //projectsEl headline, subheadline
    const projectsHeader = document.createElement('header')
    projectsHeader.className = "projects__header"

    const projectsHeadline = document.createElement('h1')
    projectsHeadline.className = "projects__headline"
    projectsHeadline.textContent = "Portfolio showoff"
    const projectsSubtext = document.querySelector('p')
    projectsSubtext.className = "projects__subtext"
    projectsSubtext.textContent = "Dive into my projects and technical skills."

    projectsHeader.append(projectsHeadline, projectsSubtext)

    return projectsHeader
}