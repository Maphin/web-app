<template>
    <div class="relative">
      <button type="button" class="custom-button"
        @click="areOptionsVisible = !areOptionsVisible"
      >
        <span>{{ selected }}</span>
        <svg class="custom-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            :class="{ 'rotate-180': areOptionsVisible }"
        >
          <path
            fill-rule="evenodd"
            d="M10 2.5a.5.5 0 01.5.5v12.793l3.146-3.147a.5.5 0 01.707 0l.647.646a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708l.646-.646a.5.5 0 01.708 0L9.5 15.293V3a.5.5 0 01.5-.5z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      
      <div
        v-if="areOptionsVisible"
        class="custom-dropdown"
      >
        <ul>
          <li class="custom-option"
            v-for="option in options"
            :key="option.id"
            @click="selectType(option)"
          >
            {{ option.title }}
          </li>
        </ul>
      </div>
    </div>
</template>
  

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Select',
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                areOptionsVisible: false
            }
        },
        methods: {
            selectType(option) {
                this.$emit('select', option.title);
                this.areOptionsVisible = false;
            }
        },
    });
</script>

<style lang="scss" scoped>
    .custom-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        font-weight: 500;
        color: #4a5568;
        background-color: #fff;
        border: 1px solid #cbd5e0;
        border-radius: 0.375rem;
        cursor: pointer;
        outline: none;
        &:hover {
            background-color: #f7fafc;
        }
    }

    .custom-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 0.5rem;
        margin-right: -0.25rem;
        fill: currentColor;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }

    .custom-dropdown {
        position: absolute;
        z-index: 10;
        width: 10rem;
        margin-top: 0.5rem;
        background-color: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        ul {
          list-style: none;
        }
    }

    .custom-option {
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        color: #4a5568;
        cursor: pointer;
        &:hover {
            background-color: #f7fafc;
        }
    }
</style>