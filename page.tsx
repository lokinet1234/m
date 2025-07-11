import { DocumentationLayout } from "@/components/documentation-layout"

export default function Home() {
  return (
    <DocumentationLayout>
      <section id="introduction">
        <h1>Documentation Title</h1>
        <p>
          Welcome to our comprehensive documentation. This guide will walk you through everything you need to know to
          get started and become proficient with our platform.
        </p>

        <div className="note">
          <strong>Note:</strong> This documentation is regularly updated. Make sure to check back for the latest
          information and best practices.
        </div>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>
          To begin your journey, you'll need to understand the core concepts and set up your development environment
          properly.
        </p>

        <h3>Prerequisites</h3>
        <ul>
          <li>Node.js 18.0 or later</li>
          <li>npm or yarn package manager</li>
          <li>Basic understanding of JavaScript/TypeScript</li>
          <li>Familiarity with React concepts</li>
        </ul>

        <div className="warning">
          <strong>Warning:</strong> Make sure you have the correct Node.js version installed before proceeding with the
          installation.
        </div>
      </section>

      <section id="installation">
        <h2>Installation</h2>
        <p>Follow these steps to install and configure the platform:</p>

        <div className="card-container">
          <div className="card">
            <h4>Step 1: Clone Repository</h4>
            <p>Clone the repository to your local machine and navigate to the project directory.</p>
          </div>
          <div className="card">
            <h4>Step 2: Install Dependencies</h4>
            <p>Run npm install or yarn to install all required dependencies for the project.</p>
          </div>
          <div className="card">
            <h4>Step 3: Configure Environment</h4>
            <p>Set up your environment variables and configuration files as needed.</p>
          </div>
        </div>
      </section>

      <section id="configuration">
        <h2>Configuration</h2>
        <p>Proper configuration is essential for optimal performance and security.</p>

        <details className="accordion-item">
          <summary>Basic Configuration</summary>
          <div className="details-content">
            <p>
              The basic configuration includes setting up your API keys, database connections, and other essential
              settings. Make sure to keep sensitive information secure.
            </p>
          </div>
        </details>

        <details className="accordion-item">
          <summary>Advanced Configuration</summary>
          <div className="details-content">
            <p>
              Advanced configuration options allow you to fine-tune performance, customize behavior, and integrate with
              third-party services.
            </p>
          </div>
        </details>

        <blockquote>
          "Proper configuration is the foundation of a robust application. Take time to understand each setting and its
          implications."
        </blockquote>
      </section>

      <section id="api-reference">
        <h2>API Reference</h2>
        <p>Complete reference for all available API endpoints and methods.</p>

        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Endpoint</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GET</td>
              <td>/api/users</td>
              <td>Retrieve all users</td>
              <td>
                <span className="highlight">Active</span>
              </td>
            </tr>
            <tr>
              <td>POST</td>
              <td>/api/users</td>
              <td>Create new user</td>
              <td>
                <span className="highlight">Active</span>
              </td>
            </tr>
            <tr>
              <td>PUT</td>
              <td>/api/users/:id</td>
              <td>Update existing user</td>
              <td>
                <span className="highlight">Active</span>
              </td>
            </tr>
            <tr>
              <td>DELETE</td>
              <td>/api/users/:id</td>
              <td>Delete user</td>
              <td>
                <span className="highlight">Deprecated</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <p>Practical examples to help you implement common use cases.</p>

        <div className="comparison-grid">
          <div className="card majority">
            <h4>Recommended Approach</h4>
            <p>
              This is the recommended way to implement the feature. It follows best practices and ensures optimal
              performance and maintainability.
            </p>
          </div>
          <div className="card dissent">
            <h4>Alternative Approach</h4>
            <p>
              While this approach works, it's not recommended for production use. Consider this only for specific edge
              cases or legacy compatibility.
            </p>
          </div>
        </div>

        <div className="takeaway-box">
          <h4>Key Takeaway</h4>
          <p>
            Always prioritize code readability and maintainability over clever optimizations. Your future self and your
            team will thank you.
          </p>
        </div>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <p>Common issues and their solutions.</p>

        <h3>Common Problems</h3>
        <ul>
          <li>Installation failures due to Node.js version mismatch</li>
          <li>Configuration errors in environment variables</li>
          <li>Network connectivity issues with external APIs</li>
          <li>Performance problems with large datasets</li>
        </ul>

        <p>
          For additional support, check our
          <a href="#" className="cite-button">
            Community Forum
          </a>
          <a href="#" className="cite-button">
            GitHub Issues
          </a>
          <a href="#" className="cite-button">
            Stack Overflow
          </a>
        </p>
      </section>
    </DocumentationLayout>
  )
}
