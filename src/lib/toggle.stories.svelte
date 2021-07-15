<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Toggle from './toggle.svelte'
</script>

<Meta title="Toggle" component={Toggle} />

<Template let:args>
  <Toggle {...args} />
</Template>

<Story name="default" />
<Story name="toggled" args={{ isToggled: true }} />
<Story name="with label" args={{ label: 'Yo!' }} />
