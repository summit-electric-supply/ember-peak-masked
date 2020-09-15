# Ember Peak Pager

A simple, flexible and customizable input UI component for masking data.

## Compatibility

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

## Installation

```
ember install @summit-electric-supply/ember-peak-masked
```

## Usage

Example:

```
<PeakPager @page={{this.page}} @total="30" @route="index" as |Pages Back Forward isBackEnabled isForwardEnabled|>
  {{#let (if isBackEnabled "enabled-arrow" "disabled")
         (if isForwardEnabled "enabled-arrow" "disabled") as |backClass forwardClass|}}
    <nav class="page-nav">
      <ul class="pagination">
        <li class="arrow prev {{backClass}} page-item">
          <Back class="page-link">
            &laquo;
          </Back>
        </li>
        <Pages as |number Page isCurrentPage isTruncated|>
          {{#if isTruncated}}
            <li class="dots disabled page-item">
              <span class="page-link">...</span>
            </li>
          {{else}}
            <li class="{{if isCurrentPage 'active' ''}} page-number page-item">
              <Page class="page-link">
                {{number}}
              </Page>
            </li>
          {{/if}}
        </Pages>
        <li class="arrow next {{forwardClass}} page-item">
          <Forward class="page-link">
            &raquo;
          </Forward>
        </li>
      </ul>
    </nav>
  {{/let}}
</PeakPager>
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
