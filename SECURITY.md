# Security Policy

## Supported Versions

We actively maintain security for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Security Features Implemented

### 1. Content Security Policy (CSP)
- **Default Source**: Restricts all content to same origin
- **Script Sources**: Allows self and Google Analytics only
- **Style Sources**: Allows self and inline styles (for CSS-in-JS)
- **Image Sources**: Allows self, data URLs, and HTTPS images
- **Frame Ancestors**: Prevents embedding in frames (clickjacking protection)
- **Base URI**: Restricts base tag to same origin
- **Form Actions**: Restricts form submissions to same origin
- **Upgrade Insecure Requests**: Forces HTTPS for all requests

### 2. Security Headers
- **X-Content-Type-Options**: `nosniff` - Prevents MIME type sniffing
- **X-Frame-Options**: `DENY` - Prevents clickjacking attacks
- **X-XSS-Protection**: `1; mode=block` - Enables XSS filtering
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controls referrer information
- **Permissions-Policy**: Disables unnecessary browser features

### 3. HTTPS Enforcement
- **Strict-Transport-Security**: Forces HTTPS connections
- **Upgrade-Insecure-Requests**: Automatically upgrades HTTP to HTTPS
- **Mixed Content Prevention**: All resources served over HTTPS

### 4. Input Sanitization
- URL sanitization for external links
- HTML content sanitization (basic implementation)
- Validation of external resources

### 5. Dependency Security
- Regular dependency updates via npm audit
- Automated security scanning in CI/CD
- Zero tolerance for high/critical vulnerabilities

## Security Measures

### Development
- TypeScript for type safety
- ESLint for code quality
- Strict Content Security Policy
- Input validation and sanitization
- Secure coding practices

### Deployment
- GitHub Pages with HTTPS enforcement
- Security headers via meta tags
- Automated security checks in CI/CD
- Regular dependency updates

### Monitoring
- Automated vulnerability scanning
- Security header validation
- Mixed content detection
- CSP violation reporting (planned)

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** create a public GitHub issue
2. **Do NOT** disclose the vulnerability publicly until it has been addressed

### How to Report
- **Email**: Create an issue in our [GitHub repository](https://github.com/abby-chung/pineapplepizza/issues) with the label "security"
- **Response Time**: We aim to respond within 48 hours
- **Resolution Time**: Critical vulnerabilities will be addressed within 7 days

### What to Include
- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Suggested fix (if available)

## Security Best Practices for Contributors

### Code Security
1. **Input Validation**: Always validate and sanitize user inputs
2. **Output Encoding**: Properly encode data before rendering
3. **Dependency Management**: Keep dependencies updated and audit regularly
4. **Secrets Management**: Never commit sensitive information

### Content Security
1. **Image Sources**: Only use trusted image sources
2. **External Links**: Validate external URLs before linking
3. **User Content**: Sanitize any user-generated content
4. **Third-party Scripts**: Minimize and validate third-party integrations

### Development Security
1. **Environment Variables**: Use environment variables for sensitive configuration
2. **Build Security**: Ensure build process doesn't expose sensitive information
3. **Testing**: Include security testing in your test suite
4. **Code Review**: Review code for security implications

## Security Checklist

### Before Deployment
- [ ] All dependencies updated and audited
- [ ] Security headers properly configured
- [ ] CSP policy tested and validated
- [ ] No sensitive information in code
- [ ] HTTPS enforced for all resources
- [ ] External links validated
- [ ] Input sanitization implemented

### Regular Maintenance
- [ ] Monthly dependency updates
- [ ] Quarterly security review
- [ ] Annual penetration testing (planned)
- [ ] Continuous monitoring setup

## Security Tools and Resources

### Automated Tools
- **npm audit**: Dependency vulnerability scanning
- **GitHub Security Advisories**: Automated vulnerability alerts
- **ESLint Security Plugin**: Static code analysis
- **CSP Evaluator**: Content Security Policy validation

### Manual Testing
- **OWASP ZAP**: Web application security testing
- **Mozilla Observatory**: Security header analysis
- **SSL Labs**: HTTPS configuration testing
- **Security Headers**: Header configuration validation

## Compliance

This project follows security best practices including:
- **OWASP Top 10**: Protection against common web vulnerabilities
- **CSP Level 3**: Modern Content Security Policy implementation
- **HTTPS Everywhere**: Secure transport for all communications
- **Privacy by Design**: Minimal data collection and processing

## Contact

For security-related questions or concerns:
- GitHub Issues: [Security Label](https://github.com/abby-chung/pineapplepizza/issues?q=label%3Asecurity)
- Security.txt: `/.well-known/security.txt`

---

*This security policy is reviewed and updated regularly to ensure it remains current with best practices and emerging threats.*